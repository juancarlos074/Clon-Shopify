import { createContext, useContext, useEffect, useState } from "react";
import supabase from "./Conexion";

const AutenContext = createContext();

export const AutenContextProvider = ({ children }) => {
  const [Userid, setUserID] = useState(null);
  const [user, setUser] = useState([]);

  // 🔹 Iniciar sesión con Google
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw new Error("Ocurrió un error durante la autenticación");

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // 🔹 Cerrar sesión
  async function signout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      alert("👋 Sesión cerrada correctamente");
      localStorage.removeItem("Id_Usuario");
      setUserID(null);
      setUser([]);
    } catch (err) {
      console.error("❌ Error durante el cierre de sesión:", err.message);
      alert("Ocurrió un error durante el cierre de sesión");
    }
  }

  // 🔹 Escucha los cambios de autenticación
  useEffect(() => {
    const { data: autenticacion } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user?.user_metadata) {
          const metadata = session.user.user_metadata;
          setUser(metadata);
          const id = await insertarUsuario(metadata);
          setUserID(id);
          
        }
      }
    );

    return () => {
      autenticacion.subscription;
    };
  }, []);

  return (
    <AutenContext.Provider value={{ signInWithGoogle, signout, user, Userid }}>
      {children}
    </AutenContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AutenContext);
};

// 🔹 Función segura para insertar el usuario si no existe
async function insertarUsuario(user) {
  if (!user?.email) return null;

  try {
    // 1️⃣ Verificamos si el usuario ya existe por correo
    const { data: usuarioExistente, error: errorSelect } = await supabase
      .from("Usuarios")
      .select("Id")
      .eq("Correo", user.email)
      .maybeSingle(); // devuelve null si no existe

    if (errorSelect) {
      console.error("❌ Error al buscar usuario:", errorSelect);
      return null;
    }

    if (usuarioExistente) {
      // 🟢 Usuario ya registrado
      localStorage.setItem("Id_Usuario", usuarioExistente.Id);
      console.log("⚠️ Usuario ya existe:", usuarioExistente.Id);
      return usuarioExistente.Id;
    }

    // 2️⃣ Insertar nuevo usuario si no existe
    const { data, error: errorInsert } = await supabase
      .from("Usuarios")
      .insert([
        {
          Correo: user.email,
          Nombre: user.full_name || "Usuario sin nombre",
          Telefono: user.phone || null,
          Foto: user.avatar_url || null,
        },
      ])
      .select("Id")
      .single();

    if (errorInsert) {
      console.error("❌ Error insertando usuario:", errorInsert);
      return null;
    }

    console.log("✅ Usuario insertado correctamente:", data.Id);
    localStorage.setItem("Id_Usuario", data.Id);
    return data.Id;
  } catch (error) {
    console.error("🚨 Error general en insertarUsuario:", error);
    return null;
  }
}

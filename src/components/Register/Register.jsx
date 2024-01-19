import Alert from "../Alert/Alert";
import MyForm from "../Form/MyForm";
import SocialButton from "../SocialButton/SocialButton";
import "../Register/Registerstyle.css";

const Register = () => {
  const handleFormSubmit = (formData) => {
    console.log("Datos del formulario:", formData);
  };

  const handleCerrarAlerta = () => {
    console.log("Alerta cerrada");
  };

  const handleRegistrarse = () => {
    console.log("Registrado correctamente");
  };

  return (
    <article>
      <h1>Crea una cuenta</h1>
      <div className="social">
        <div>
          {" "}
          <SocialButton socialicon="facebook" />{" "}
        </div>
        <div>
          {" "}
          <SocialButton socialicon="github" />{" "}
        </div>
        <div>
          {" "}
          <SocialButton socialicon="linkedin" />{" "}
        </div>
      </div>
      <h2>O usa tu email para registrarte</h2>
      <MyForm onFormSubmit={handleFormSubmit} />
      <Alert
        mostrar={false}
        mensaje="Ejemplo de mensaje"
        onCerrarAlerta={handleCerrarAlerta}
        onRegistrarse={handleRegistrarse}
      />{" "}
    </article>
  );
};

export default Register;

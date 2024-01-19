import { useState } from "react";
import Alert from "../Alert/Alert";
import PropTypes from "prop-types";

const MyForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const [alerta, setAlerta] = useState({
    visible: false,
    tipo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validarCamposCompletos = () => {
    if (
      !formData.nombre ||
      !formData.correo ||
      !formData.contraseña ||
      !formData.confirmarContraseña
    ) {
      mostrarAlerta("Error: Por favor, complete todos los campos.", "danger");
      return false;
    }
    return true;
  };

  const validarFormatoCorreo = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      mostrarAlerta(
        "Error: El correo electrónico no tiene un formato válido.",
        "danger"
      );
      return false;
    }
    return true;
  };

  const validarCoincidenciaContraseñas = () => {
    if (formData.contraseña !== formData.confirmarContraseña) {
      mostrarAlerta("Error: Las contraseñas no coinciden.", "danger");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validarCamposCompletos() ||
      !validarFormatoCorreo() ||
      !validarCoincidenciaContraseñas()
    ) {
      return;
    }

    if (onFormSubmit) {
      onFormSubmit(formData);
      mostrarAlerta("Registro satisfactorio", "success");
    }
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ visible: true, tipo, mensaje });
  };

  const handleCerrarAlerta = () => {
    setAlerta({ visible: false, tipo: "", mensaje: "" });
  };

  return (
    <div className="container mt-5">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {["nombre", "correo", "contraseña", "contraseña nuevamente"].map(
            (campo) => (
              <div key={campo} className="mb-3">
                <input
                  type={campo.includes("contraseña") ? "password" : "text"}
                  className="form-control"
                  id={campo}
                  name={campo}
                  value={formData[campo]}
                  onChange={handleChange}
                  placeholder={`Ingrese su ${campo}`}
                />
              </div>
            )
          )}
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </form>
        {alerta.visible && (
          <Alert
            mostrar={alerta.visible}
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            onCerrarAlerta={handleCerrarAlerta}
          />
        )}
      </div>
    </div>
  );
};
MyForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
export default MyForm;

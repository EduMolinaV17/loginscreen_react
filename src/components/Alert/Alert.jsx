import PropTypes from "prop-types";

const Alert = ({ mostrar, tipo, mensaje, onCerrarAlerta }) => {
  const handleClose = () => {
    if (onCerrarAlerta) {
      onCerrarAlerta();
    }
  };

  return mostrar ? (
    <div
      className={`alert-container ${
        tipo === "success" ? "alert-success" : "alert-danger"
      }`}
    >
      <div
        className={`alert ${
          tipo === "success" ? "alert-success" : "alert-danger"
        }`}
        role="alert"
      >
        {mensaje}
        <button
          type="button"
          className="btn-close"
          onClick={handleClose}
        ></button>
      </div>
    </div>
  ) : null;
};
Alert.propTypes = {
  mostrar: PropTypes.bool.isRequired,
  tipo: PropTypes.oneOf(["success", "danger"]).isRequired,
  mensaje: PropTypes.string.isRequired,
  onCerrarAlerta: PropTypes.func,
};

export default Alert;

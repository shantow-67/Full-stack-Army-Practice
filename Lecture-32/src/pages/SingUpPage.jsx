import Button from "../components/button/Button";
import InputGroup from "../components/inputGroup/InputGroup";

const SingUpPage = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "2rem auto",
        backgroundColor: "#fff",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ fontFamily: "Arial", fontSize: "2rem", color: "#222" }}>
          Sign Up
        </h3>
        <p style={{ fontFamily: "Arial", fontSize: "1rem", color: "#666" }}>
          Already have an account?{" "}
          <span style={{ color: "blue", textDecoration: "underline" }}>
            Login here
          </span>
        </p>
      </div>

      <form>
        <InputGroup label="What is your name?" name="name" type="text" />
        <InputGroup label="What is your email?" name="email" type="email" />
        <InputGroup
          label="Set your Password?"
          name="password"
          type="password"
        />
        <div>
          <Button text="Submit" type="submit" varient="primary" size="small" />
          <Button text="Reset" type="reset" varient="danger" size="medium" />
          <Button text="info" type="" varient="info" size="big" />
        </div>
      </form>
    </div>
  );
};

export default SingUpPage;

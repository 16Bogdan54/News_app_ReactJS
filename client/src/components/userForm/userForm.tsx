import style from "./userForm.module.css";

type Props = {
  isSignUp?: boolean;
};

const UserForm = ({ isSignUp }: Props) => {
  return (
    <div className="flex flex-col my-10 items-center w-full">
      <form className="w-full md:m-1/2 lg:w-1/3  flex flex-col items-start justify-center">
        {isSignUp && (
          <>
            <label htmlFor="displayedName" className={style.name_label}>
              Displayed Name
            </label>
            <input
              type="text"
              id="displayedName"
              className={style.name_input}
              placeholder="displayed name"
            />
          </>
        )}

        <label htmlFor="username" className={style.name_label}>
          Username
        </label>
        {/*<div className="flex">*/}
        {/*<span className={style.at_icon}>@</span>*/}
        <input
          type="text"
          id="username"
          className={style.name_input}
          placeholder="username"
        />
        {/*</div>*/}

        <div className="mb-6">
          <label htmlFor="password" className={style.password_label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={style.password_label}
            placeholder={".".repeat(6)}
            required
          />
        </div>
        <button type="button" className={style.submit_button}>
          {isSignUp ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;

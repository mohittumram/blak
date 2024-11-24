const config = {
  local: {
    DB: {
      HOST: "localhost",
      PORT: "27017",
      DATABASE: "treatment-builder",
      USERNAME: "",
      PASSWORD: "",
    },
    email: {
      username: "",
      password: "",
      host: "smtp.gmail.com",
      port: 465,
    },
    PORT: 8055,
  },
  staging: {
    DB: {
      HOST: "44.211.113.36",
      PORT: "9048",
      DATABASE: "treatmentbuilder",
      USERNAME: "treatmentbuilder",
      PASSWORD: "BFGjdvdyP",
    },
    email: {
      username: "",
      password: "",
      host: "smtp.gmail.com",
      port: 465,
    },
    PORT: 9048,
  },
  production: {
    DB: {
      HOST: "",
      PORT: "27017",
      DATABASE: "",
      USERNAME: "",
      PASSWORD: "",
    },
    email: {
      username: "",
      password: "",
      host: "",
      port: 465,
    },
    PORT: 8055,
  },
};
export const get = (env) => {
  return config[env];
};

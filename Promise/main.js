const loadAxios = loadScript("https://unpkg.com/axios/dist/axios.min.js");

loadAxios.then(() => {
  axios
    .get("https://randomuser.me/api/?inc=name&results=3")
    .then((response) => {
      if (response.status === 200) {
        const users = response.data.results;

        for (const { name } of users) {
          alert(`Welcome ${name.title} ${name.first} ${name.last}! 🌹`);
        }
      }
    });
});

function loadScript(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = path;
    script.onload = () => resolve(path);
    script.onerror = () => reject(new Error("Whoops"));

    document.head.append(script);
  });
}

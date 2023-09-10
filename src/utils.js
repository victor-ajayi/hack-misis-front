export async function createUser(data) {
  try {
    const res = await fetch("/api/auth/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: data.login,
        hash: data.password,
      }),
    });
    if (res.status === 200) {
      const data = await res.json();
      return data;
    } else if (res.status === 400) {
      throw new Error("User already exists");
    } else {
      throw new Error("Could not create user");
    }
  } catch (err) {
    console.error(err);
  }
}

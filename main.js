import Clerk from "@clerk/clerk-js";

const initClerk = async () => {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!clerkPubKey) {
    throw new Error("Add your VITE_CLERK_PUBLISHABLE_KEY to .env file");
  }

  const clerk = new Clerk(clerkPubKey);
  await clerk.load();

  if (clerk.user) {
    window.location.href = "/private1.html";
  } else {
    document.getElementById("app").innerHTML = `
      <div id="sign-in"></div>
    `;

    const signInDiv = document.getElementById("sign-in");

    clerk.mountSignIn(signInDiv);
  }
};

initClerk().catch((error) => console.error("Error initializing Clerk:", error));

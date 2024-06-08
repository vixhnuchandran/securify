import Clerk from "@clerk/clerk-js"

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!clerkPubKey) {
  throw new Error("Add your VITE_CLERK_PUBLISHABLE_KEY to .env file")
}

const clerk = new Clerk(clerkPubKey)

async function authenticateUser() {
  await clerk.load()

  if (clerk.user) {
    document.getElementById("main-content").style.display = "block"

    const userButtonDiv = document.getElementById("user-button")
    if (userButtonDiv) {
      clerk.mountUserButton(userButtonDiv)
    }
  } else {
    window.location.replace("/")
  }
}

document.getElementById("main-content").style.display = "none"

authenticateUser()

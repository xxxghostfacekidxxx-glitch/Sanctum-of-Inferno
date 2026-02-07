export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === "/message") {
      return new Response("Miss Chaos online 🔥")
    }

    if (url.pathname === "/chat") {
      return new Response("Chat endpoint")
    }

    return new Response("Not Found", { status: 404 })
  }
}

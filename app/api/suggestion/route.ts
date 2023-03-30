export async function GET(request: Request) {
  // TODO: Connect to our Microsoft Azure Funcition endpoint
  const response = await fetch(
    "https://vibe-ai-image-generator-app.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );

  const textData = await response.text();
  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}

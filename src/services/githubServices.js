// Pega releases do repositório
export const getReleases = async (repoUrl) => {
  // repoUrl ex: "https://github.com/Gwin14/Click_Click_Here"
  const [owner, repo] = repoUrl.split("github.com/")[1].split("/");
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/releases`
  );
  if (!response.ok) throw new Error("Erro ao buscar releases");
  return response.json();
};

// Pega o README bruto (texto Markdown)
export const getReadme = async (repoUrl) => {
  const [owner, repo] = repoUrl.split("github.com/")[1].split("/");
  const response = await fetch(
    `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
  );
  if (!response.ok) throw new Error("Erro ao buscar README ou o arquivo não existe");
  return response.text(); 
};

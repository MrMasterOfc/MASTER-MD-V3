import axios from 'axios';

const githubStalk = async (m, gss) => {
  try {
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();
    const args = text.split(' ');

    const validCommands = ['githubstalk', 'ghstalk'];

   if (validCommands.includes(cmd)) {
      if (!args[0]) return m.reply('Mention a GitHub username to stalk.');

      const username = args[0];

      try {
        // Fetch GitHub user data using Axios
        const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
        const userData = githubResponse.data;

        if (githubResponse.status !== 200) {
          return m.reply(`❌ GitHub user not found.`);
        }

        // Construct the response message
        let responseMessage = `🌟 *🔰GitHub Profile - @${userData.login}*\n\n`;
        responseMessage += `  ◦  *🔰Name*: ${userData.name || 'N/A'}\n`;
        responseMessage += `  ◦  *🔰Username*: @${userData.login}\n`;
        responseMessage += `  ◦  *🔰Bio*: ${userData.bio || 'N/A'}\n`;
        responseMessage += `  ◦  *🔰ID*: ${userData.id}\n`;
        responseMessage += `  ◦  *🔰Node ID*: ${userData.node_id}\n`;
        responseMessage += `  ◦  *🔰Profile URL*: ${userData.avatar_url}\n`;
        responseMessage += `  ◦  *🔰GitHub URL*: ${userData.html_url}\n`;
        responseMessage += `  ◦  *🔰Type*: ${userData.type}\n`;
        responseMessage += `  ◦  *🔰Admin*: ${userData.site_admin ? 'Yes' : 'No'}\n`;
        responseMessage += `  ◦  *🔰Company*: ${userData.company || 'N/A'}\n`;
        responseMessage += `  ◦  *🔰Blog*: ${userData.blog || 'N/A'}\n`;
        responseMessage += `  ◦  *🔰Location*: ${userData.location || 'N/A'}\n`;
        responseMessage += `  ◦  *🔰Email*: ${userData.email || 'N/A'}\n`;
        responseMessage += `  ◦  *🔰Public Repositories*: ${userData.public_repos}\n`;
        responseMessage += `  ◦  *🔰Public Gists*: ${userData.public_gists}\n`;
        responseMessage += `  ◦  *🔰Followers*: ${userData.followers}\n`;
        responseMessage += `  ◦  *🔰Following*: ${userData.following}\n`;
        responseMessage += `  ◦  *🔰Created At*: ${userData.created_at}\n`;
        responseMessage += `  ◦  *🔰Updated At*: ${userData.updated_at}\n`;

        const githubReposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
        const reposData = githubReposResponse.data;

        if (reposData.length > 0) {
          const topRepos = reposData.slice(0, 5); // Display the top 5 starred repositories

          const reposList = topRepos.map(repo => {
            return `  ◦  *🔰Repository*: [${repo.name}](${repo.html_url})
  ◦  *🔰Description*: ${repo.description || 'N/A'}
  ◦  *🔰Stars*: ${repo.stargazers_count}
  ◦  *🔰Forks*: ${repo.forks}`;
          });

          const reposCaption = `📚 *Top Starred Repositories*\n\n${reposList.join('\n\n')}`;
          responseMessage += `\n\n${reposCaption}`;
        } else {
          responseMessage += `\n\nNo public repositories found.`;
        }

        // Send the message with the updated caption and user's avatar
        await gss.sendMessage(m.from, { image: { url: userData.avatar_url }, caption: responseMessage }, { quoted: m });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        await gss.sendMessage(m.from, 'An error occurred while fetching GitHub data.', { quoted: m });
      }
    }
  } catch (error) {
    console.error('Error processing the command:', error);
    m.reply('An error occurred while processing the command.');
  }
};

export default githubStalk;

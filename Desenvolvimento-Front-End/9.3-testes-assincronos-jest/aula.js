const fetch = require('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGitUserInfos = async (username) => {
    const url = getUserReposUrl(username);

    const response = await fetch(url);
    const data = await response.json();

    const { name, company, twitter_user: twitter, bio, location } = data;

    return {
        name,
        company,
        twitter,
        bio,
        location,
    };
};

getGitUserInfos('gfpoliva')
    .then((data) => console.log(data));


console.log(getUserReposUrl('gfpoliva'));

module.exports = { getUserReposUrl, getGitUserInfos};
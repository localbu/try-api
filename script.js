fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQWRObXF2SmZANWVRpQ0FEMUdva2lrUjYtZAUxDSk51QklFeHYwWHctaU1NU0dOMkZAlZAUROVjUyanVpb25nYUJDNWZAiQ05SbkdEVFJvQlhBdnY5QjFaUFdNLW1ielgtSjlKX1dvcExiU0F0Rzl6WnBVTl9JZAG1GSWsZD`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.data.forEach(post => {
            console.log(`Post ID: ${post.id}`);
            console.log(`Caption: ${post.caption}`);
            console.log(`Media URL: ${post.media_url}`);
        });
    })
    .catch(error => console.error('Error fetching Instagram posts:', error));

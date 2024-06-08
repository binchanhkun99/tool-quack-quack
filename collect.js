// Dùng fetch API để thực hiện request
fetch('https://api.yescoin.gold/game/collectCoin', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Origin': 'https://www.yescoin.gold',
        'Pragma': 'no-cache',
        'Referer': 'https://www.yescoin.gold/',
        'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Token': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxODE2ODk1NTQ2IiwiY2hhdElkIjoiMTgxNjg5NTU0NiIsImlhdCI6MTcxNzg0MDc5OCwiZXhwIjoxNzIwNDMyNzk4LCJyb2xlQXV0aG9yaXplcyI6W10sInVzZXJJZCI6MTc5OTI3NTA0ODA2NjAyNzUyMH0.v4YvRsBNwFWIBn45aJqOTjXHSKKu8WTmz9KQ4R4yxKTS8rKDNTMfvwRUQtfj5_jHRYXfZQaGz7kRbCFSHLjlvQ',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
    },
    body: JSON.stringify(19) // Payload được lấy từ devtool
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

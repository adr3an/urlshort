const button = document.querySelector("#submit");
const copyBtn = document.querySelector('#copyBtn');
const form = document.querySelector('#submitForm');
const linkArea = document.querySelector('#linkArea');

linkArea.disabled = true;
copyBtn.disabled = true;
form.addEventListener('submit', async function (e) {
    copyBtn.disabled = false;
    e.preventDefault();
    const longLink = form.elements.input.value;
    console.log('submit');

    const token = '2dcd58489806d3742fb5dc7155b088af99afa48b';
    await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": `${longLink}`, "domain": "bit.ly" })

    }).then((response) => {
        response.json().then((data) => {
            if (data.link) {
                linkArea.value = data.link;
            } else {
                linkArea.value = "";
                linkArea.placeholder = "Link not valid";
                copyBtn.disabled = true;
            }
        });
    });
});

copyBtn.addEventListener('click', () => {
    linkArea.disabled = false;
    linkArea.select();
    document.execCommand("copy");
    linkArea.disabled = true;

});

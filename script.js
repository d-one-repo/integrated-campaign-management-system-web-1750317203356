document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('campaignForm');
    const campaignList = document.getElementById('campaignList');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('campaignName').value;
        const channels = document.getElementById('channels').value;

        if (name && channels) {
            const li = document.createElement('li');
            li.className = 'p-2 border border-gray-300 rounded fade-in';
            li.textContent = `Campaign: ${name}, Channel: ${channels}`;
            campaignList.appendChild(li);

            form.reset();
        }
    });
});
fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        const timeLinks = document.querySelectorAll('.user-bottom-container a');
        timeLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                timeLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                const timeframe = link.textContent.toLowerCase();
                updateTimes(timeframe);
            });
        });

        function updateTimes(timeframe) {
            data.forEach(item => {
                const hours = item.timeframes[timeframe].current;
                const previous = item.timeframes[timeframe].previous;
                const title = item.title.toLowerCase().replace(' ', '-');
                
                document.querySelector(`#${title}-hours`).textContent = `${hours}hrs`;
                document.querySelector(`#${title}-last-week`).textContent = `Last Week - ${previous}hrs`;
            });
        }
    });



  /*  const title = document.getElementById("title").innerHTML;
if (title === "Work") {
    document.getElementById(title+"-hours").innerHTML = item.timeframes[timeframe].current;
}*/
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card"); 
    const albumPhoto = document.querySelector(".album-photo img");
    const marquee = document.querySelector(".album-detail marquee");
    
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault(); // stop page reload
            const songTitle = card.querySelector(".card-title").innerText;
            const songArtist = card.querySelector(".card-info").innerText;
            const songImage = card.querySelector("img").src;

            // Update bottom player
            albumPhoto.src = songImage;
            marquee.innerHTML = `
                <a href="#" class="box-p1">${songTitle}</a><br>
                <span class="box-p2">${songArtist}</span>
            `;
        });
    });
});



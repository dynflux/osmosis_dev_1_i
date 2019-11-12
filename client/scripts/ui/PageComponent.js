function PageComponent(bind, args) {
    this.activeVideo = {
        title: "ECG Basics",
        id: 0,
        url: "https://www.youtube.com/watch?v=xIZQRjkwV9Q",
        flashCards: 0,
        questions: 0,
        categories: [
            {
                name: "Cardiovscular",
                url: "#"
            },
            {
                name: "Physiology: Cardiovascular Physiology", 
                url: "#"
            },
            {
                name: "Electrocardiography",
                url: "#"
            }
        ],
        similarVideos: [
            {
                image: "img/1_.jpg",
                title: "Electrocardiography Handwritten",
                source: "Youtube"
            },
            {
                image: "img/2_.jpg",
                title: "Electrocardiography Khan Academy",
                source: "Youtube"
            }
        ],
        nextToWatch: [
            {
                image: "img/upList.png",
                title: "Bload pressure, blood flow, and resistance",
                source: "Osmosis"
            }
        ]
    };

    bind(this);
}

PageComponent.prototype.renderMenu = function (menuItem) {
    alert(menuItem + " page rendered!");
};

PageComponent.prototype.addToQuizQueue = function () {
    alert('Video with id "' + this.activeVideo.id + '" added to quiz queue');
};


module.exports = PageComponent;
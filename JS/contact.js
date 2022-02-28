function initMap() {
    const cairo = { lat: 30.064742, lng: 31.249509 };
    const map = new google.maps.Map(document.getElementById("map"), {
        scaleControl: true,
        center: cairo,
        zoom: 10,
    });
    const infowindow = new google.maps.InfoWindow();

    infowindow.setContent("<b>القاهرة</b>");

    const marker = new google.maps.Marker({ map, position: cairo });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}
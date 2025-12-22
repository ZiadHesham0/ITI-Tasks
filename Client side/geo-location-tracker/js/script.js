((g) => {
    var h,
        a,
        k,
        p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "_ib_",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set(),
        e = new URLSearchParams(),
        u = () =>
            h ||
            (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                    e.set(
                        k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                        g[k]
                    );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.googleapis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
            }));
    d[l]
        ? console.warn(p + " only loads once. Ignoring:", g)
        : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({ key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly" });





let map;

async function initMap(x, y) {
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        center: { lat: x, lng: y },
        zoom: 15,
    });

    // Add marker on current user location
    new Marker({
        position: { lat: x, lng: y },
        map: map,
        title: "You are here!",
    });
}

navigator.geolocation.getCurrentPosition(function (obj) {
    console.log("Latitude: " + obj.coords.latitude);
    console.log("Longitude: " + obj.coords.longitude);

    initMap(obj.coords.latitude, obj.coords.longitude);
});
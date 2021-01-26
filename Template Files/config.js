define({
    "format": "expandableBanner",
    "defaultBanner": "Main_Banner",
    "defaultPanel": "Sky_Der",
    "polite": "instant",
    "banners": [
        {
            "name": "Main_Banner",
            "asset": "index.html",
            "width": "980",
            "height": "250",
            "defaultImage": "images/backup.jpg"
        }
    ],
    "panels": [
        {
            "name": "Sky_Der",
            "asset": "panels/Sky_Der.html",
            "width": "456",
            "height": "1080",
            "autoCollapse": "never",
            "positionType": "bannerRelativePixels",
            "x": "1012",
            "y": "0"
        },
        {
            "name": "Sky_Izq",
            "asset": "panels/Sky_Izq.html",
            "width": "456",
            "height": "1080",
            "autoCollapse": "never",
            "positionType": "bannerRelativePixels",
            "x": "-488",
            "y": "0"
        },
        {
            "name": "Billboard",
            "asset": "panels/Billboard.html",
            "width": "1044",
            "height": "250",
            "autoCollapse": "never",
            "positionType": "bannerRelativePixels",
            "x": "-32",
            "y": "0"
        },
        {
            "name": "Video_Panel",
            "asset": "panels/Video_Panel.html",
            "width": "1920",
            "height": "1080",
            "autoCollapse": "never",
            "positionType": "pageRelativePixels",
            "x": "0",
            "y": "0"
        },
        {
            "name": "skyViewabilityController",
            "asset": "panels/skyViewabilityController.html",
            "width": "100",
            "height": "300",
            "autoCollapse": "never",
            "positionType": "bannerRelativePixels",
            "x": "1000",
            "y": "200"
        }
    ]
});
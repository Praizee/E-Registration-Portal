function divprint() {
    /*	$('#divstresult').print({
        globalStyles: true,
        mediaPrint: false,
        stylesheet: null,
        noPrintSelector: ".no-print",
        iframe: true,
        append: null,
        prepend: null,
        manuallyCopyFormValues: true,
        deferred: $.Deferred(),
        timeout: 750,
        title: null,
        doctype: '<!doctype html>'
}); */
    //MM_openBrWindow('receipt/clearance.php','Receipt','width=400');
}



//Start of Tawk.to Script

// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/5b98456dc9abba5796777239/default';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();

//End of Tawk.to Script


// WhatsApp script

var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?27319';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "20",
        "marginRight": "50",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "Scholastic University",
        "brandSubTitle": "Typically replies within a day",
        "brandImg": "https://cdn-icons-png.flaticon.com/512/1344/1344761.png",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello, I have a question about ...",
        "backgroundColor": "#0a5f54",
        "ctaText": "Start Chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "2349028923853"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
// End of Whatsapp Script
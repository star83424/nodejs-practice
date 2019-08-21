var $ = require("jquery");

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
 
//     var $ = require("jquery")(window);

// });



function clearCache () {
    console.log("Hi");
    let  window = {
        location :{
            hostname : "ebtest.ctbcbank.com:7777",
            protocol : "https:",
            pathname : "/etc.clientlibs/ctbc/components/content/CPTL-MFD-QSH-ETFDividend/clientlib.js"
        }
    }
    var serverPath = window.location.protocol + "//" + window.location.hostname;
    var componentPath = window.location.pathname;
    //document.URL

    var settings = {
        "url": serverPath + "/dispatcher/invalidate.cache",
        "method": "POST",
        "headers": {
            "Content-Type": "text/plain",
            "CQ-Action": "Activate",
            "CQ-Handle": componentPath,
            "cache-control": "no-cache",
            success: function (response, status) {
                console.log('太棒啦！清掉惹～～');
            },
            error: function (response, status) {
                console.log(response);
            }
        },
        "data": componentPath
    }


    // try{
    //     $.post(settings);
    // }catch(e){console.log(e)}
    

    // $http.post(serverPath, {componentPath}, {
    //         headers: {
    //             'CQ-Handle': componentPath,
    //             'CQ-Action': 'Activate',
    //             'Content-Type': 'text/plain'
    //         }
    //     })

    //     .success(function (response, status) {
    //         window.alert('太棒啦！清掉惹～～');
    //     })
    //     .error(function (response, status) {
    //         window.alert(response);
    //     })
}

exports.clearCache = clearCache;
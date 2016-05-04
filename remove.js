
        function clearHistory(){
          var callback = function () {
                  alert("history removed");
                };

                var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
                var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
                chrome.browsingData.remove({
                  "since": oneWeekAgo
                }, {
                  "appcache": true,
                  "cache": true,
                  "cookies": true,
                  "downloads": true,
                  "fileSystems": true,
                  "formData": true,
                  "history": true,
                  "indexedDB": true,
                  "localStorage": true,
                  "pluginData": true,
                  "passwords": true,
                  "webSQL": true
                }, callback);

        }

        document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('button').addEventListener('click', clearHistory);
        });

 (function() {
            let url = new URL(window.location);
            let paramsToRemove = ["fbclid", "igshid", "utm_source", "utm_medium", "utm_campaign"];
            
            let hasRemoved = false;
            paramsToRemove.forEach(param => {
                if (url.searchParams.has(param)) {
                    url.searchParams.delete(param);
                    hasRemoved = true;
                }
            });

            if (hasRemoved) {
                if (url.href !== "https://public-shop.github.io/dashboard/") {
                    window.location.href = "https://public-shop.github.io/dashboard/";
                } else {
                    window.history.replaceState({}, document.title, url.pathname + url.search);
                }
            }
        })();
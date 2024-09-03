function FindProxyForURL(url, host) {
    // Define the proxy server details
    var proxyServer = "PROXY 192.168.1.1:8080";
    
    // Function to check if the server is reachable
    function isProxyReachable() {
        var testHost = "192.168.1.1";
        var testPort = 8080;
        
        // Try resolving the host
        var resolved = dnsResolve(testHost);
        
        // Check if the host can be resolved
        if (resolved) {
            return true; // The host is resolvable, assume reachable
        } else {
            return false; // The host is not resolvable, assume not reachable
        }
    }
    
    // Check if the proxy server is reachable
    if (isProxyReachable()) {
        return proxyServer; // Use the proxy server
    } else {
        return "DIRECT"; // No proxy
    }
}

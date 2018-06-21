package com.nevexis.tb;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class SimpleCORSFilter implements Filter {

    private static final Logger technicalLog = LoggerFactory.getLogger("technicalLog." + SimpleCORSFilter.class.getName());

    public static String getClientIpAddr(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        HttpServletRequest request = (HttpServletRequest) req;
        String origin = request.getHeader("origin");
//        technicalLog.info("#####" + SubmitCoderequest.getRequestURL().toString());
        if (allowedAccess(origin)) {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }

        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Expose-Headers", "content-filename");
        response.setHeader("Access-Control-Allow-Headers", "content-type, accept, x-requested-with, authorization, X-Ajax-call, language, Pragma, Cache-Control, If-modified-since, content-filename");

        if (!request.getMethod().equals("OPTIONS")) {
            chain.doFilter(req, res);
        }
    }

    public void init(FilterConfig filterConfig) {
    }

    public void destroy() {
    }


    private boolean allowedAccess(String ref) {
        Map<String, Boolean> accessMap = new HashMap<>();
        accessMap.put("http://localhost:8088", true);
        accessMap.put("http://localhost:3000", true);
        accessMap.put("http://localhost:3001", true);
        accessMap.put("http://localhost:4001", true);
        accessMap.put("http://localhost:7078", true);
        accessMap.put("http://192.168.8.145:3000", true);
        accessMap.put("http://192.168.8.146:7078", true);
        accessMap.put("http://192.168.8.145:7078", true);


        return accessMap.getOrDefault(ref, false);
    }
}
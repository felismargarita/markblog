package com.felis.markblogserver.config.shiro;

import com.alibaba.fastjson.JSONObject;
import com.felis.markblogserver.constants.Constants;
import com.felis.markblogserver.entity.ResResult;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;

public class AjaxPermissionsAuthorizationFilter extends FormAuthenticationFilter {

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) {
		JSONObject info = new JSONObject();
		info.put("code",Constants.UN_AUTH_CODE);
		info.put("msg","error");
		info.put("info","未登录");
		PrintWriter out = null;
		HttpServletResponse res = (HttpServletResponse) response;
		try {
			res.setCharacterEncoding("UTF-8");
			res.setContentType("application/json");
			out = response.getWriter();
			out.println(info);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (null != out) {
				out.flush();
				out.close();
			}
		}
		return false;
	}

	@Bean
	public FilterRegistrationBean registration(AjaxPermissionsAuthorizationFilter filter) {
		FilterRegistrationBean registration = new FilterRegistrationBean(filter);
		registration.setEnabled(false);
		return registration;
	}
}

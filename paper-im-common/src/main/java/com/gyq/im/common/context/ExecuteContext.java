package com.gyq.im.common.context;

import com.gyq.im.common.tools.utils.UUIDGenerator;

/**
 * 执行上下文.
 *
 * @User gaoyaqiu
 */
public class ExecuteContext {

    /**
     * 系统业务api 前缀
     */
    public static final String SYSTEM_API_PREFIX = "s";

    /**
     * 基础业务api 前缀
     */
    public static final String BIZ_BASE_API_PREFIX = "b";

    /**
     * 请求id
     */
    private String requestId;

    /**
     * 防止实例化
     */
    private ExecuteContext() {
        setRequestId(UUIDGenerator.generate());
    }

    private static final ThreadLocal<ExecuteContext> LOCAL = new ThreadLocal<ExecuteContext>() {
        @Override
        protected ExecuteContext initialValue() {
            return new ExecuteContext();
        }
    };

    /**
     * 设置请求id
     *
     * @param requestId
     */
    private void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    /**
     * 获取请求id.
     *
     * @return
     */
    public String getRequestId() {
        return requestId;
    }

    /**
     * get context.
     *
     * @return context
     */
    public static ExecuteContext getContext() {
        return LOCAL.get();
    }

    /**
     * remove context.
     */
    public static void removeContext() {
        LOCAL.remove();
    }

    /**
     * get context.
     *
     * @return context
     */
    public static ExecuteContext initRequestId(String requestId) {
        LOCAL.get().setRequestId(requestId);
        return LOCAL.get();
    }
}

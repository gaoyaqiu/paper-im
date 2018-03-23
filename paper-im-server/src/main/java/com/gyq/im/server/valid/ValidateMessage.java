package com.gyq.im.server.valid;

/**
 * jsr-349 使用消息常量定义.
 *
 * @author gaoyaqiu
 */
public interface ValidateMessage {

    // 内容为空时的提示
    String NotBlank = "{com.gyq.valid.NotBlank.message}";
    // Url格式错误
    String URL = "{com.gyq.valid.URL.message}";
    // 邮件地址
    String Email = "{com.gyq.valid.Email.message}";
    // IP地址格式错误
    String Ip = "{com.gyq.valid.Ip.message}";
    // 交易类型错误
    String TradeType = "{com.gyq.valid.TradeType.message}";
    // 不为Empty
    String NotEmpty = "{com.gyq.valid.NotEmpty.message}";
    // 不为Null
    String NotNull = "{com.gyq.valid.NotNull.message}";
    // 为Null
    String Null = "{com.gyq.valid.Null.message}";

    String Past = "{com.gyq.valid.Past.message}";
    // 正则错误
    String Pattern = "{com.gyq.valid.Pattern.message}";
    // 对象长度判断错误
    String Size = "{com.gyq.valid.Size.message}";

    // 对象长度判断错误(固定)
    String fixedSize = "{com.gyq.valid.fixedSize.message}";

    // 字串长度判断错误
    String Length = "{com.gyq.valid.Length.message}";

    // 字串长度判断错误
    String MaxLength = "{com.gyq.valid.MaxLength.message}";

    // 字串长度判断错误
    String MinLength = "{com.gyq.valid.MinLength.message}";

    // 最小值错误
    String Min = "{com.gyq.valid.Min.message}";
    // 最大值错误
    String Max = "{com.gyq.valid.Max.message}";

    String Future = "{com.gyq.valid.Future.message}";

    String Digits = "{com.gyq.valid.Digits.message}";

    String AssertFalse = "{com.gyq.valid.AssertFalse.message}";

    String AssertTrue = "{com.gyq.valid.AssertTrue.message}";

    String DecimalMax ="{com.gyq.valid.DecimalMax.message}";

    String DecimalMin = "{com.gyq.valid.DecimalMin.message}";

}

package com.gyq.im.common.tools.keygen;

import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Test;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public final class DefaultKeyGeneratorTest {
    
    @Test
    public void assertGenerateKey() throws Exception {
        int threadNumber = Runtime.getRuntime().availableProcessors() << 1;
        ExecutorService executor = Executors.newFixedThreadPool(threadNumber);
        final int taskNumber = threadNumber << 2;
        final DefaultKeyGenerator keyGenerator = new DefaultKeyGenerator();
        Set<Number> generatedKeys = new HashSet<>();
        for (int i = 0; i < taskNumber; i++) {
            generatedKeys.add(executor.submit(new Callable<Number>() {
                
                @Override
                public Number call() throws Exception {
                    return keyGenerator.generateKey();
                }
            }).get());
        }

        for (Number n : generatedKeys) {
            System.out.println(n);
        }

        Assert.assertThat(generatedKeys.size(), CoreMatchers.is(taskNumber));
    }
}

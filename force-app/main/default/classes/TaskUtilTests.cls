@IsTest
public  class TaskUtilTests {

    @IsTest
     static void testGetTaskPriorityNormal () {

        Test.startTest();
        String temp = TaskUtil.getTaskPriority('CB');
        Test.stopTest();

        Assert.areEqual('Normal',temp);

    }

    @IsTest
     static void testGetTaskPriorityHigh  () {

        Test.startTest();
        String temp = TaskUtil.getTaskPriority('CA');
        Test.stopTest();

        Assert.areEqual('High',temp);

    }



}

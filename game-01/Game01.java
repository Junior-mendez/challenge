import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Game01{
    public static void main(String[] args) {
        int[] numbers = {3,3};
        int sum = 6;
        int[] result = getSubset(numbers, sum);
       System.out.println(Arrays.toString(result));
}

public static int[] getSubset(int[] nums, int sum){

        List<Integer> listNumbers = new ArrayList<>();
        for( int n : nums){
            int x = sum - n;
            if(listNumbers.contains(x)){
                return new int[]{x,n};
            }
            listNumbers.add(n);
        }
        return new int[]{};
    }
}

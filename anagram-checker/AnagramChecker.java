import java.util.Scanner;

public class AnagramChecker {
    public static boolean areAnagrams(String str1, String str2) 
    {     
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        
        
        if (str1.length() != str2.length()) {
            return false;
        }
        else
        {
            for(int i=0;i<str1.length();i++)
            {
                if(!str2.contains(str1.charAt(i)+""))
                {
                    return false;
                }
            }
            return true;
        }
        
       
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine();
        
        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine();
        
        if (areAnagrams(str1, str2))
        {
            System.out.println("Anagrams");
        } else 
        {
            System.out.println("Not Anagrams");
        }
        
        scanner.close();
    }
}

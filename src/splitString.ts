/* Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */

export const splitString = (input: String): Array<String> => {
	const chars = input.split('');
    console.log(chars);
    
    // Every 2 with _ for last
	return [''];
};


/**
 * check username syntax is valid or not
 * -------------------------------------
 * rules:
 * - minimum 2 characters
 * - no space, ', ", <, >, &, @, |, =, (, ) character
 * 
 * @param {string} username
 * 
 * @return {boolean}
 * - true  - if username syntax is correct
 * - false - if username syntax is incorrect
 * 
 * @since   🌱 1.0.0
 * @version 🌴 1.0.0
 * @author  ✍ Muhammad Mahmudul Hasan Mithu
 */
function username( username: string): boolean
{
	if(username.length>1) return !(/([ \'"<>&@|=()]+)/).test(username);
	return false;
}


/**
 * check email syntax is valid or not
 * -----------------------------------
 * rules:
 * - must pass /((.+)(@)(.+)(\.)(.+))/
 * - no space, ', ", <, >, & character
 * 
 * @param {string} email
 * 
 * @return {boolean}
 * - true  - if email syntax is correct
 * - false - if email syntax is incorrect
 * 
 * @since   🌱 1.0.0
 * @version 🌴 1.0.0
 * @author  ✍ Muhammad Mahmudul Hasan Mithu
 */
function email( email: string ): boolean
{
	if((/((.+)(@)(.+)(\.)(.+))/).test(email)){  // true -  it is an email
		return !(/([ \'"<>&]+)/).test(email);
	}
	return false;
}

export default {username, email};

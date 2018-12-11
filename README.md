# issue-print
A node CLI to print assigned Github issues in terminal 
https://www.npmjs.com/package/issue-print

This is a very simple Node CLI that prints assigned Github issues to the terminal. Currently, it only takes two flags `configure` and `print` with the alias `issue-print` to run the commands. 

To install from npm, run `npm install -g issue-print`. This links the bin command in the `package.json` to the alias `issue-print.` Generate an API token from Github such that you can access its API via the CLI (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) then run `issue-print configure`. This will prompt you to enter the token and will save it to a temp directory. Then you can run `issue-print print` to show all assigned issues in github in your terminal. 

```
agastyamondal$ issue-print configure
? Enter github access token 12345-test-token
Access token saved. Run issue-print print to see assigned issues

agastyamondal$ issue-print print
Agastyas-MacBook-Pro:issue-print agastyamondal$ issue-print print
Issue Title: test 123


Repository: datascience-projects


Issue text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis erat in feugiat condimentum. Vestibulum commodo mi eu commodo lobortis. Nulla vel eros quam. Praesent vel imperdiet purus. Quisque ex nisi, malesuada vitae orci sit amet, luctus dapibus lorem. Etiam dapibus mollis purus, in commodo ligula porttitor quis. Curabitur condimentum, lectus et gravida viverra, massa tellus venenatis velit, vel sagittis sem dui sit amet ligula. Donec nec sagittis elit. Fusce est augue, viverra at felis sit amet, vulputate sollicitudin turpis. Ut non elementum elit, nec lacinia ante. Etiam at interdum magna.

Etiam a dui nisl. Mauris justo nisi, rutrum nec felis sollicitudin, dapibus varius mi. Aenean in lacinia nunc. Nulla ac tempus orci, nec facilisis mauris. Donec felis lectus, hendrerit at lacinia quis, lobortis nec nisi. Nulla est nibh, aliquam nec mi at, aliquam aliquam ante. Nulla facilisi.
```

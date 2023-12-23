
# Memory Test 

This module store and calculate the performances of the current memory test. 
* WPM
* Time to first ratio


## WPM


WPM (Words Per Minute) is the typing speed. 

WPM = 12000*(Number of characters / Time in milliseconds)

$$ WPM = 12000 \times { N_{characters} \over T_{milliseconds} }$$

* Length +1 to consider the last space
* Characters per millisecond = Number of character / typing time
* Characters per minute = 60000 * Characters per millisecond 
* Words per minute = Characters per minute / 5


## Time to first key ratio

The following formula is used to convert the time to first key into ratio in the range [0; 1]:

$$ 1-\frac{1}{\left(1+\exp\left(-1.5x+5.3\right)\right)} $$

When time to first key is less than 2 seconds, the ratio is closed to one, and decrease as the time increase:

[![Time to first key ratio formula](time-to-first-key-ratio.png)](https://www.desmos.com/calculator/q9wh7zoljc)

The factor to get the user time to first key ratio is: 1.1002588437228038
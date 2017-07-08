package main

import (
	"math/rand"
	"time"
	"fmt"
)

var randomizer float64
var primeCount float64

func main() {
	for i := 0; i < 100000000; i++ {
		if isPrime(RollDice()) {
			primeCount++
		}
	}
	fmt.Println("Probability of Occurence of Prime number on Rolling a Dice: " , primeCount/100000000)
}

func isPrime(num int) bool {
	cnt := 0
	for i := 1; i <= int(num/2); i++ {
		if num % i == 0 {
			cnt++
		}
	}
	if cnt == 1 {
		return true
	}
	return false
}

func RollDice() int {
	rand.Seed(int64(randomizer*randomizer*randomizer*27) * time.Now().Unix())
	randomizer++
	return rand.Intn(7)
}

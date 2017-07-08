package main

import (
	"math/rand"
	"time"
	"fmt"
)

var randomizer float64

var	HH float64
var	TT float64
var	HT float64
var	TH float64

func main() {
	for i := 0; i < 1000000; i++ {
		if Toss() == 1 {
			if Toss() == 1 {
				HH++
			} else {
				HT++
			}
		} else {
			if Toss() == 1 {
				TH++
			} else {
				TT++
			}
		}
	}
	fmt.Println("HH: " , HH/10000)
	fmt.Println("HT: " , HT/10000)
	fmt.Println("TH: " , TH/10000)
	fmt.Println("TT: " , TT/10000)
}

func Toss() int {
	rand.Seed(int64(randomizer * randomizer * randomizer) * time.Now().Unix())
	randomizer++
	return rand.Intn(2)
}

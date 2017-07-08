package Bank

import (
	"fmt"
	"time"
)

type Account struct {
	Name string
	Age int
	Phone string
	AadharCard string
	Email string
	Amt float64
}

type AccountWithFD struct {
	acc *Account
	FD int
}

var FDS = []FixedDeposit{}

func (acc *Account) DepositAmt (Amt float64) {
	acc.Amt += Amt
	fmt.Println("RS." , acc.Amt , " Deposited")
	acc.CurrentBal()
}

func (acc *Account) WithdrawAmt (Amt float64) {
	acc.Amt -= Amt
	fmt.Println("RS." , acc.Amt , " Withdrawn")
	acc.CurrentBal()
}
func (acc *Account) CurrentBal() float64 {
	fmt.Println("Current Balance: RS." , acc.Amt)
	return acc.Amt
}
func (acc *Account) MakeFixedDeposit(Amt float64 , Date string) {
	ExpDate , _ := time.Parse("02/01/2006" , Date)
	if (Date != time.Now().Local().Format("02/01/2006")) && time.Since(ExpDate).Seconds() < 0 {
		accFD := AccountWithFD{acc , 0}
		FD := FixedDeposit{&accFD , Amt , Date}
		acc.Amt -= Amt
		FDS = append(FDS, FD)
		fmt.Println("------Fixed Deposit------")
		fmt.Println("RS." , Amt , " Fixed Deposited till " , Date)
		fmt.Println("Reference ID: ", len(FDS)-1)
		fmt.Println("------Fixed Deposit------")
		acc.CurrentBal()
	} else {
		fmt.Println("Enter a Future Date")
	}
}
func (acc *Account) EndFixedDeposit(FD int) {
	EndFD := FDS[FD]
	acc.Amt += 	EndFD.ReturnTotalValue()
	acc.CurrentBal()
}

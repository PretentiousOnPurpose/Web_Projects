package Bank

import (
	"fmt"
	"time"
	"strings"
)

type FixedDeposit struct {
	accFD *AccountWithFD
	Amt float64
	Date string
}

func (FD *FixedDeposit) ReturnTotalValue() float64 {
	if FD.isMatured() {
		fmt.Println("RS." , 1.15*FD.Amt , " Deposited via Matured Fixed Deposit")
		return 1.15*FD.Amt
	} else {
		fmt.Println("RS." , 0.85*FD.Amt , " Deposited via Cancelled Fixed Deposit")
		return 0.85*FD.Amt
	}
}
func (FD *FixedDeposit) isMatured() bool {
	Today := strings.Split(time.Now().Local().Format("02/01/2006") , "/")
	MatDate := strings.Split(FD.Date , "/")
	CurrDay := Today[0]
	CurrMonth := Today[1]
	CurrYear := Today[2]
	MatDay := MatDate[0]
	MatMonth := MatDate[1]
	MatYear := MatDate[2]

	if CurrYear >= MatYear {
		if CurrMonth == MatMonth {
			if CurrDay >= MatDay {
				return true
			}
		} else if CurrMonth >= MatMonth {
			return true
		}
	}
	return false
}


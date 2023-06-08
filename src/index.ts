import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./database";
import { ACCOUNT_TYPE, TAccount } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

/* app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.get("/accounts", (req: Request, res: Response) => {
  res.send(accounts);
});

app.get("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const resultado = accounts.find((account) => account.id === id);
  if (resultado) {
    res.status(200).send(resultado);
  } else {
    res.status(200).send("Account not found");
  }
});

app.delete("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = accounts.findIndex((account) => account.id === id);
  if (result >= 0) {
    accounts.splice(result, 1);
    res.status(200).send("item deletado com sucesso");
  } else {
    res.status(200).send("Account not found");
  }
  console.log(accounts);
});

app.put("/accounts/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const newId = req.body.id as string | undefined; // cliente pode ou não enviar id
  const newName = req.body.name as string | undefined; // cliente pode ou não enviar name
  const newBalance = req.body.balance as number | undefined; // cliente pode ou não enviar age
  const newType = req.body.type as ACCOUNT_TYPE | undefined; // cliente pode ou não enviar size

  const account = accounts.find((account) => account.id === id);

  if (account) {
    account.id = newId || account.id;
    account.ownerName = newName || account.ownerName;
    account.balance = newBalance || account.balance;
    account.type = newType || account.type;
  }
  res.status(200).send("Successfully updated accoun");
}); */

////////////////////////////////




app.post('/accounts/', (req:Request , res:Response) => {
    const {id, ownerName,balance , type} = req.body
    const newAccount:TAccount = {
        id, 
        ownerName,
        balance,
        type
    }
    accounts.push(newAccount);
    res.status(200).send("Account added successfull");
    console.log(accounts)

})

app.get("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const resultado = accounts.find((account) => account.id === id);
    if (resultado) {
      res.status(200).send(resultado);
    } else {
      res.status(200).send("Account not found");
    }
  });

/* app.put("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const newwId = req.body.id as string | undefined; 
    const newName = req.body.ownerName as string | undefined; 
    const newBalance = req.body.balance as number | undefined; 
    const newType = req.body.type as ACCOUNT_TYPE | undefined; 
    // OU
    
    const account = accounts.find((account) => account.id === id);
  
    if (account) {
      account.id = newwId || account.id;
      account.ownerName = newName || account.ownerName;
      account.balance = newBalance || account.balance;
      account.type = newType || account.type;
    }
    res.status(200).send("Successfully updated accoun");
    console.log(accounts);
    
  }); */

  // OU

  app.put("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id
    const {id:newId, ownerName, balance, type} = req.body
    const account = accounts.find((account) => account.id === id);
    if(account) {
        account.id = newId || account.id;
        account.ownerName = ownerName|| account.ownerName;
        account.balance = balance|| account.balance;
        account.type = type|| account.type;
        res.status(200).send("Successfully updated accoun");
        console.log(accounts);
    }else{
        res.status(200).send("not updated");
        console.log(accounts);
    }
  })

app.delete("/accounts/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    const result = accounts.findIndex((account) => account.id === id);
    if (result >= 0) {
      accounts.splice(result, 1);
      res.status(200).send("successfully deleted account");
    } else {
      res.status(200).send("Account not found");
    }
    console.log(accounts);
  });
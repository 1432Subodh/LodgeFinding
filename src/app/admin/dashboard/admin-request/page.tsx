'use client'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check, X } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import axios from 'axios'
import { Api_actionAdminReq, Api_getAdminReq } from '../../../../../helper/helper'



function page() {

  const [userReq, setUserReq] = useState<any>([])

  useEffect(() => {

    axios.get(Api_getAdminReq).then((res) => {

      setUserReq(res.data.users)


    }).then((err: any) => console.log(err))
  }, [])


  const actionRequest = async(_id:any, type:any)=>{
    const res = await axios.post(Api_actionAdminReq,{_id, type})
    console.log(res)
  }


  return (
    <div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] truncate sm:inline-block hidden pt-4">User Id</TableHead>
            <TableHead className="truncate">Email</TableHead>
            <TableHead className="truncate">Method</TableHead>
            <TableHead className="text-right truncate">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          
          {
            userReq.map((ele:any, index:any) =>
              <TableRow key={index}>
                <TableCell className="font-medium truncate sm:inline-block hidden pt-7">{ele._id}</TableCell>
                <TableCell className="truncate w-[200px]">{ele.email}</TableCell>
                <TableCell className="truncate w-[200px] ">Request</TableCell>
                <TableCell className="text-right truncate ">
                  <div className="flex justify-end gap-3">
                    <div>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <p className="p-2 transition-all rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-red-700 hover:text-red-800 text-sm ">
                            <X />

                          </p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              You want to cancel the Admin request
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={()=>actionRequest(ele._id, "REJECT")}>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                    <div>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <p className="p-2 transition-all rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-green-700 hover:text-green-800 text-sm"><Check /></p>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              You want to Accept the Admin request
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={()=>actionRequest(ele._id, "ACCEPT")}>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )
          }

        </TableBody>
      </Table>


    </div>
  )
}

export default page
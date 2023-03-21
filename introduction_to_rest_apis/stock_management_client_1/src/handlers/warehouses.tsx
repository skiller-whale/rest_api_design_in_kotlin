import React from "react";
import type { Handler } from "./types.ts";
import { htmlResponse } from "../response.tsx";
import { A, H2, List } from "../style.tsx";

const warehouses: Handler = ({ warehouses }) => htmlResponse(
  <>
    <H2>Warehouses</H2>
    <List>
      {warehouses.map((warehouse) => (
        <li>
          <A href={`/warehouses/${warehouse.id}`}>{warehouse.name}</A>
        </li>
      ))}
    </List>
  </>
);

export default warehouses;

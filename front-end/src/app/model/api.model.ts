import { Injectable } from '@angular/core';
import { Adapter } from '../../adapters/adapter';

export interface Person {
     Name: string,
     Date: string,
     Category: string,
     Content: string,
     Image: string,
     UpVote: number,
     DownVote: number
}

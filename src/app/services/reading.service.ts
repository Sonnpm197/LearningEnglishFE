import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reading} from '../models/reading.model';
import {ReadingTest} from '../models/reading-test.model';

@Injectable()
export class ReadingService {

  readingSamplesForPractice: Reading[];
  readingTests: ReadingTest[];

  constructor(private httpClient: HttpClient) {
    this.readingSamplesForPractice = [
      new Reading({
        id: 'CIWBBand5To6.5Chap1',
        title: 'Culture Shock',
        content: 'Content of Culture Shock'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap2',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap3',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap4',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap2',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap5',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap6',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap7',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap8',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new Reading({
        id: 'CIWBBand5To6.5Chap9',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
    ];

    this.readingTests = [
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap1',
        title: 'Culture Shock',
        content: 'Content of Culture Shock'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap2',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap3',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap4',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap2',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap5',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap6',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap7',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap8',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
      new ReadingTest({
        id: 'CIWBBand5To6.5Chap9',
        title: 'Vegetable',
        content: 'Content of Vegetable'
      }),
    ];
  }

  getReadingSamplesForPractice(): Array<Reading> {
    return this.readingSamplesForPractice;
  }

  getReadingSampleById(id: string): Reading {
    return this.readingSamplesForPractice.find(element => element.id === id);
  }

  getReadingTests(): Array<ReadingTest> {
    return this.readingTests;
  }

  getReadingTestById(id: string): ReadingTest {
    return this.readingTests.find(element => element.id === id);
  }
}
